import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"


const Signin=()=>{
return(
    <div className=" h-screen bg-white">
        <div className=" justify-center  align-top border-solid  border-black">
            <div className="flex">
            <Label>name:</Label>
            <Input placeholder="enter your name"/>
            </div>

<div className="flex ">
<Label>password</Label>
<Input type="password"/>
</div>

        </div>

    </div>
)
}
export default Signin