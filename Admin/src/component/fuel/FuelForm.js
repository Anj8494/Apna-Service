import SideBar from "../layout/SideBar";
import Hearder from "../layout/Hearder";
import Footer from "../layout/Footer"
import '../../stylecomponent/fuelform.css'

const FuelForm=()=>{
    return<div>
        <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div className="layout-page">
            <Hearder />

            <div class="content-wrapper">
              <div className="row">
                 <div className="col-xxl">
                   <div className="card mb-4">
                     <div className="card-body">
                         <div className="row mb-3">
                           <label className="col-sm-2 col-form-label" for="basic-default-name">Boat_oil</label>
                           <div className="col-sm-10">
                             <input type="text" className="form-control" id="basic-default-name" placeholder="Enter SUb Category Price" />
                           </div>
                         </div>
                         <div className="row mb-3">
                           <label className="col-sm-2 col-form-label" for="basic-default-company">Abhi</label>
                           <div className="col-sm-10">
                           <div className="form-text">Sub Category Price</div>
                             <input
                               type="text"
                               className="form-control"
                               id="basic-default-company"
                               placeholder="Enter SUb Category Price" />
                           </div>
                           <label className="col-sm-2 col-form-label" for="basic-default-company">Personal*</label>

                         </div>
                         <div className="row mb-3">
                           <label className="col-sm-2 col-form-label" for="basic-default-email">Nj</label>
                           <div className="col-sm-10">
                             <div className="input-group input-group-merge">
                               <input
                                 type="text"
                                 id="basic-default-email"
                                 className="form-control"
                                 placeholder="enter Sub Category Price"
                                 aria-label="john.doe"
                                 aria-describedby="basic-default-email2" />
                               <span class="input-group-text" id="basic-default-email2">                               </span>
                             </div>
                             <div className="form-text">Sub Category Price</div>
                             </div>
                             <label className="col-sm-2 col-form-label" for="basic-default-company">Vehicle*</label>
                         </div>
                         <div className="row mb-3">
                           <label className="col-sm-2 col-form-label" for="basic-default-phone">Radha</label>
                           <div className="col-sm-10">
                           <div className="form-text">Sub Category Price</div>
                             <input
                               type="text"
                               id="basic-default-phone"
                               className="form-control phone-mask"
                               placeholder="Sub Category priced"
                               aria-describedby="basic-default-phone" />
                           </div>
                           <label className="col-sm-2 col-form-label" for="basic-default-phone">bhjghj</label>
                         </div>
                         <div className="row mb-3">
                           <label className="col-sm-2 col-form-label" for="basic-default-message">Shan</label>
                           <div className="col-sm-10">
                           <div className="form-text">Sub Category Price</div>
                           <input
                               type="text"
                               id="basic-default-phone"
                               class="form-control phone-mask"
                               placeholder="Sub Category Price"
                               aria-label="658 799 8941"
                               aria-describedby="basic-default-phone" />
                           </div>
                           </div>
                           <label class="col-sm-2 col-form-label" for="basic-default-message">Shan</label>

                         </div>
                         <div class="row justify-content-end">
                           <div class="col-sm-10">
                             <button type="submit" class="btn btn-primary">Send</button>
                             <button type="submit" class="btn btn-primary">Back</button>
                           </div>
                         </div>
                     </div>
                   </div>
                 </div>
               </div>
               <Footer/>
            </div>
          </div>
        </div>
      </div>

}
export default FuelForm;