import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { callApi } from "../../../utils/apicall";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DeleteUser = () => {
  const router = useRouter();
  const { id } = router.query;

  const onSubmitDelete = async (e) => {
    e.preventDefault();

    try {
      await callApi("delete", `/deleteadmin/${id}`);
      Router.push("/super-admin/all-user-list");
      toast.success("Deleted  successfully !");
    } catch (error) {
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

export default DeleteUser;
