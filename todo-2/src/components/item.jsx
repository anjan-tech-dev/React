function Item({item}) {
  return (
    <>
      <div class="row row2">
        <div class="col-6">{item.Name}</div>
        <div class="col-3">{item.Date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger btn2">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Item;
