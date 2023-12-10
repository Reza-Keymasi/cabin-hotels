import { useCheckout } from "./useCheckout";
import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="medium"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check Out
    </Button>
  );
}

export default CheckoutButton;
