import { Form } from "react-bootstrap";
const AddMoreCL = ({onLocationName,onLocationCode,inputKey})=>{
    
    return(
        <>  <div style={{ backgroundColor:"#f2f8ff",padding:"1%",marginTop:"10px"}}>
            <Form.Group className="mb-3">
            <Form.Label>Clinical Location Name </Form.Label>
            <Form.Control
              type="text"
              name={"location_name-"+inputKey}
              placeholder="Clinical Location Name"
              onChange={e=> onLocationName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Clinical Location Code </Form.Label>
            <Form.Control
              type="text"
              name={"location_code-"+inputKey}
              placeholder="Clinical Location Code"
              onChange={e=>onLocationCode(e.target.value)}
            />
          </Form.Group>
          </div>
        </>
    )
}
export default AddMoreCL;