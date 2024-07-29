"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import { ModalLoan } from "@/presentation/components/common";
import { LoanRequestTypes } from "@/presentation/@types";
import { Button } from "@/presentation/components/form";

import styles from "./loan-request.module.scss";

const LoanRequest: React.FC = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoanRequestTypes>({
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      cpf: "",
    },
  });

  const onSubmit = async (data: LoanRequestTypes) => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          "Não foi possível processar a solicitação. Por favor, tente novamente mais tarde."
        );
      }

      setModalMessage("Obrigado! Em breve entraremos em contato.");
      reset();
    } catch (error) {
      setModalMessage("Ops! Por favor, tente novamente mais tarde.");
    } finally {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-label="Formulário de Solicitação de Empréstimo"
      >
        <fieldset>
          <legend className={styles.title} aria-label="Título do Formulário">
            O dinheiro que você precisa, com as menores taxas.
          </legend>
          <input
            {...register("nome", {
              required: "Nome é obrigatório",
              minLength: {
                value: 4,
                message: "Nome deve ter no mínimo 4 caracteres",
              },
            })}
            className={`${styles["input-text"]} ${
              errors.nome ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="Nome"
            aria-invalid={errors.nome ? "true" : "false"}
            aria-describedby="nome-error"
          />
          {errors.nome && (
            <p id="nome-error" className={styles.error}>
              {errors.nome.message}
            </p>
          )}

          <input
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            })}
            className={`${styles["input-text"]} ${
              errors.email ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="E-mail"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className={styles.error}>
              {errors.email.message}
            </p>
          )}

          <InputMask
            {...register("whatsapp", {
              required: "Whatsapp é obrigatório",
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: "Whatsapp inválido",
              },
            })}
            mask="(99) 99999-9999"
            maskChar=""
            className={`${styles["input-text"]} ${
              errors.whatsapp ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="Whatsapp"
            aria-invalid={errors.whatsapp ? "true" : "false"}
            aria-describedby="whatsapp-error"
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" className={styles.error}>
              {errors.whatsapp.message}
            </p>
          )}

          <InputMask
            {...register("cpf", {
              required: "CPF é obrigatório",
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: "CPF inválido",
              },
            })}
            mask="999.999.999-99"
            maskChar=""
            className={`${styles["input-text"]} ${
              errors.cpf ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="CPF"
            aria-invalid={errors.cpf ? "true" : "false"}
            aria-describedby="cpf-error"
          />
          {errors.cpf && (
            <p id="cpf-error" className={styles.error}>
              {errors.cpf.message}
            </p>
          )}

          <select
            className={styles["input-text"]}
            {...register("tipoSolicitacao", {
              required: "Tipo de solicitação é obrigatório",
            })}
            aria-invalid={errors.tipoSolicitacao ? "true" : "false"}
            aria-describedby="tipoSolicitacao-error"
          >
            <option value="" disabled hidden>
              Qual tipo de solicitação?
            </option>
            <option className={styles["option"]} value="credito-pessoal">
              Crédito Pessoal
            </option>
            <option className={styles["option"]} value="credito-consignado">
              Crédito Consignado
            </option>
            <option className={styles["option"]} value="antecipacao-fgts">
              Antecipação FGTS
            </option>
            <option className={styles["option"]} value="cartao-credito">
              Cartão de Crédito
            </option>
          </select>
          {errors.tipoSolicitacao && (
            <p id="tipoSolicitacao-error" className={styles.error}>
              {errors.tipoSolicitacao.message}
            </p>
          )}

          <div className={styles["terms-box"]}>
            <input
              className={`${styles.checkbox} ${
                errors.termos ? styles["checkbox-error"] : ""
              }`}
              type="checkbox"
              {...register("termos", {
                required: "Você deve aceitar os termos para continuar",
              })}
              name="termos"
              id="termos"
              aria-invalid={errors.termos ? "true" : "false"}
              aria-describedby="termos-error"
            />
            <label className={styles["label-checkbox"]} htmlFor="termos">
              Aceito receber comunicações da América Financeira
            </label>
          </div>
          {errors.termos && (
            <p id="termos-error" className={styles.error}>
              {errors.termos.message}
            </p>
          )}

          <Button
            typeStyle="btn1"
            width="100%"
            text={isSubmitting ? "Contratando" : "Quero contratar"}
            aria-label={isSubmitting ? "Contratando" : "Quero contratar"}
          />
        </fieldset>
      </form>

      <ModalLoan
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        aria-label="Modal de Solicitação de Empréstimo"
      />
    </div>
  );
};

export default LoanRequest;
