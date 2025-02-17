import useStore from "../store/store";

it("updates showCustomerModal state", () => {
  const { setShowCustomerModal, showCustomerModal } = useStore.getState();
  setShowCustomerModal(true);
  expect(useStore.getState().showCustomerModal).toBe(true);
});

it("updates showOrderModal state", () => {
  const { setShowOrderModal } = useStore.getState();
  setShowOrderModal(true);
  expect(useStore.getState().showOrderModal).toBe(true);
});