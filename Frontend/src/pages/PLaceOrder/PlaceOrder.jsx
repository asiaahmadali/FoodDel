function PlaceOrder() {
  return (
    <form className="flex justify-between ">
      {/* left part */}
      <div>
        <h1>Delivery Information</h1>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="" />
      </div>

      {/* right part */}
      <div></div>
    </form>
  );
}

export default PlaceOrder;
