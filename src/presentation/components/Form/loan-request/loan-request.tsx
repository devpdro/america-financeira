"use client";

import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useState } from "react";
import { LoanRequestTypes } from "@/presentation/@types";

import { ModalLoanRequest } from "@/presentation/components/common";
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <fieldset>
          <legend className={styles.title}>
            O dinheiro que você precisa, com as menores taxas.
          </legend>
          <input
            {...register("nome", {
              required: true,
              minLength: 4,
            })}
            className={`${styles["input-text"]} ${
              errors.nome ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="Nome"
          />
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className={`${styles["input-text"]} ${
              errors.email ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="E-mail"
          />
          <InputMask
            {...register("whatsapp", {
              required: true,
              pattern: /^\(\d{2}\) \d{5}-\d{4}$/,
            })}
            mask="(99) 99999-9999"
            maskChar=""
            className={`${styles["input-text"]} ${
              errors.whatsapp ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="Whatsapp"
          />
          <InputMask
            {...register("cpf", {
              required: true,
              pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            })}
            mask="999.999.999-99"
            maskChar=""
            className={`${styles["input-text"]} ${
              errors.cpf ? styles["input-text-error"] : ""
            }`}
            type="text"
            placeholder="CPF"
          />
          <select
            className={`${styles["input-text"]}`}
            {...register("tipoSolicitacao", {
              required: true,
            })}
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
            <p className={styles.error}>{errors.tipoSolicitacao.message}</p>
          )}
          <div className={styles["terms-box"]}>
            <input
              className={`${styles.checkbox} ${
                errors.termos ? styles["checkbox-error"] : styles.error
              }`}
              type="checkbox"
              {...register("termos", {
                required: true,
              })}
              name="termos"
              id="termos"
            />
            <label className={styles["label-checkbox"]} htmlFor="termos">
              Aceito receber comunicações da América Financeira
            </label>
          </div>
          {errors.termos && (
            <p className={styles.error}>{errors.termos.message}</p>
          )}
          <Button
            typeStyle="btn1"
            width="100%"
            text={isSubmitting ? "Contratando" : "Quero contratar"}
          />
        </fieldset>
      </form>

      <ModalLoanRequest
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
      />
    </div>
  );
};

export default LoanRequest;
