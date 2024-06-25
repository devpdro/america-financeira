"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/presentation/components/Form";
import styles from "./loan-request.module.scss";

export type FormTypes = {
  nome: string;
  email: string;
  whatsapp: string;
  cpf: string;
  tipoSolicitacao: string;
  termos: boolean;
};

const LoanRequest: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      cpf: "",
      tipoSolicitacao: "",
      termos: false,
    },
  });

  const onSubmit = async (data: FormTypes) => {
    try {
      const response = await fetch("https://n8n.americaintegracao.com.br/webhook/site_teste", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      console.log(data);

      toast.success("Enviado com sucesso");

      reset();
    } catch (error) {
      console.error("erro", error);
      toast.error("Falha ao enviar os dados");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <fieldset>
        <legend className={styles.title}>
          O dinheiro que você precisa, com as menores taxas.
        </legend>
        <input
          {...register("nome", {
            required: "Campo obrigatório",
            minLength: {
              value: 4,
              message: "Nome incompleto",
            },
          })}
          className={`${styles["input-text"]} ${
            errors.nome ? styles["input-text-error"] : ""
          }`}
          type="text"
          placeholder="Nome"
        />
        {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        <input
          {...register("email", {
            required: "Campo obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/,
              message: "E-mail inválido",
            },
          })}
          className={`${styles["input-text"]} ${
            errors.email ? styles["input-text-error"] : ""
          }`}
          type="text"
          placeholder="E-mail"
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <InputMask
          {...register("whatsapp", {
            required: "Campo obrigatório",
            pattern: {
              value: /^\(\d{2}\) \d{5}-\d{4}$/,
              message: "Número inválido",
            },
          })}
          mask="(99) 99999-9999"
          maskChar=""
          className={`${styles["input-text"]} ${
            errors.whatsapp ? styles["input-text-error"] : ""
          }`}
          type="text"
          placeholder="Whatsapp"
        />
        {errors.whatsapp && (
          <p className={styles.error}>{errors.whatsapp.message}</p>
        )}
        <InputMask
          {...register("cpf", {
            required: "Campo obrigatório",
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
        />
        {errors.cpf && <p className={styles.error}>{errors.cpf.message}</p>}
        <select
          {...register("tipoSolicitacao", {
            required: "Selecione uma opção",
          })}
          className={`${styles["input-text"]} ${
            errors.tipoSolicitacao ? styles["input-text-error"] : ""
          }`}
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
          <option className={styles["option"]} value="consorcio">
            Consórcio
          </option>
        </select>
        {errors.tipoSolicitacao && (
          <p className={styles.error}>{errors.tipoSolicitacao.message}</p>
        )}
        <div className={styles["terms-box"]}>
          <input
            {...register("termos", {
              required: "Selecione uma opção",
            })}
            className={styles.checkbox}
            type="checkbox"
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
        <Button type="btn1" width="350px" style={{ border: "1px solid red" }}>
          Testando
        </Button>
      </fieldset>
    </form>
  );
};

export default LoanRequest;