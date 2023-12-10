import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoadig } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Account Successfully Created");
    },
  });

  return { signup, isLoadig };
}
