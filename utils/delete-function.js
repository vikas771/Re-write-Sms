
import { callApi } from "./apicall";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleteItem = async (endpoint, itemId) => {
  try {
    const response = await callApi("delete", `${endpoint}/${itemId}`);
    console.log(response.data);
    toast.success("Deleted  successfully !");
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("Something gone wrong !");
    throw new Error('Failed to delete item');
  }
};

export default deleteItem;