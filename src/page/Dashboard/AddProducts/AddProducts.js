import React from 'react';
import Swal from 'sweetalert2'
const AddProducts = () => {

    const handleSubmit=(e)=>{
      e.preventDefault()
      const form=e.target
      const name= form.name.value
      const img=form.url.value
      const price=form.price.value
      const Brand=form.brand.value
      const details=form.details.value

      const data={
        name,
        img,
        price,
        details,
        Brand
      }
      fetch('https://repliq-server.vercel.app/products', {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)

      })
      .then(res=>res.json())
      .then(data=> {
        console.log(data);
        form.reset()
        Swal.fire(
            'product add success!',
            'You clicked the button!',
            'success'
          )
      })
      console.log(data);
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>ADD PRODUCTS</h1>
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-14">
      <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">img</span>
          </label>
          <input type="text" name='url' placeholder="img url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" placeholder="price" name='price' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input type="text" placeholder="Brand" name='brand' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">details</span>
          </label>
          <input type="text" name='details' placeholder="details" className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </div>
      </form>
    </div>
 
        </div>
    );
};

export default AddProducts;