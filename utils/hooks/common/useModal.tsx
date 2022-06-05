import React from "react";
import { useModal } from "../modal";
import Modal from "@/../components/layout/modal";

const useModaler = () => {
  const { state } = useModal();

  return <>{state.type === "" ? null : <Modal />}</>;
};

export default useModaler;
