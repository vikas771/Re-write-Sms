import * as React from "react";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { useRouter } from "next/router";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callApi } from "../../../utils/apicall";

const DeleteExam = () => {
  const router = useRouter();
  const { id } = router.query;

  const onSubmitDelete = async (e) => {
    e.preventDefault();

    try {
      await callApi("delete", `/examdelete/${id}`);
      Router.push("/common-form/view-exam");
      toast.success("Deleted  successfully !");
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
      toast.error("Something gone wrong !");
    }
  };

  return (
    <>
      <h1>Delete School</h1>
      <form onSubmit={onSubmitDelete}>
        <Button variant="contained" color="secondary" type="submit">
          Delete user
        </Button>
      </form>
    </>
  );
};

export default DeleteExam;
