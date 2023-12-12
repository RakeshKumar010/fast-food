const Orders = () => {
  return (
    <div
      className="border-2 fixed top-0 right-0 mt-14 p-5 ml-4 hidden lg:block h-full"
      style={{ width: "27vw" }}
    >
      <div>
        <div className="flex justify-between cs-table-row ">
          <p>Product</p>
          <p>Qty</p>
          <p>Total </p>
        </div>
        <div className="flex justify-between cs-table-row border-2 rounded-md">
          <p>1. CHEESE PIZZA [SMALL] CRUST - REGULAR (S) **sdfs</p>
          <p>1</p>
          <p>$11.99</p>
        </div>
        <div className="cs-table-row">
          <p>Subtotal:</p>
          <p>$11.99</p>
        </div>
        <div className="cs-table-row">
          <p>Total:</p>
          <p>$11.99</p>
        </div>
      </div>
      <button className="bg- bg-green-500 text-white font-bold p-3 mt-7 rounded-lg">Place Order</button>
    </div>
  );
};

export default Orders;
