import React, { useState } from "react";
import { TextInput, NumberInput, Textarea } from "@mantine/core";
import { useRegisterMutation } from "../redux/api/authApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "@mantine/form";
import {
  useCreateContactMutation,
  useGetSingleContactQuery,
  useUpdateContactMutation,
} from "../redux/api/contactApi";
import Cookies from "js-cookie";

const Edit = () => {
  const nav = useNavigate();
  const token = JSON.parse(Cookies.get("token"));
  const { id } = useParams();
  const { data } = useGetSingleContactQuery({ id, token });
  const [updateContact] = useUpdateContactMutation();

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },

    // validate: {
    //   name: (value) =>
    //     value.length < 2 ? "Name must be at least 2 characters" : null,
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    // },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className=" text-2xl font-semibold">Edit data</h1>
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const { data } = await updateContact({
              id,
              contact: values,
              token,
            });
            console.log(data);
            nav("/");
          } catch (error) {
            console.log(error);
          }
        })}
        className="flex flex-col gap-5 w-96 shadow-lg p-5"
      >
        <TextInput {...form.getInputProps("name")} placeholder="Your Name" />
        <NumberInput
          {...form.getInputProps("phone")}
          placeholder="Phone Number"
        />
        <TextInput {...form.getInputProps("email")} placeholder="Your Email" />
        <Textarea {...form.getInputProps("address")} placeholder="Address" />

        <button
          className=" py-1 px-2 bg-blue-500 rounded text-white"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
