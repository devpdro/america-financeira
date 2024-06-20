"use client";

import { useForm } from "react-hook-form";

import InputMask from "react-input-mask";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Button } from "@/presentation/components/Form";

import styles from "./loan-request.module.scss";

const LoanRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting  },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      cpf: "",
      tipoSolicitacao: "",
      termos: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);

    toast.success("Enviado com sucesso");

    reset();
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
              message: "Numero inválido",
            },
          })}
          mask="(99) 99999-9999"
          maskChar=""
          className={`${styles["input-text"]} ${
            errors.whatsapp ? styles["input-text-error"] : ""
          }`}
          type="text"
          placeholder="Whatsapp"
        />{" "}
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
          <option value="" disabled selected hidden>
            Qual tipo de solicitação?
          </option>
          <option className={styles["option"]} value="antecipacao-fgts">
            Crédito Pessoal
          </option>
          <option className={styles["option"]} value="credito-consignado">
            Crédito Consignado
          </option>
          <option className={styles["option"]} value="antecipacao-fgts">
            Antecipação FGTS
          </option>
          <option className={styles["option"]} value="antecipacao-fgts">
            Consórcio
          </option>
        </select>
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
          </label>{" "}
        </div>
        <Button
          type="btn1"
          text={isSubmitting ? "Enviando..." : "Solicitar agora"}
        ></Button>
      </fieldset>
    </form>
  );
};

export default LoanRequest;
