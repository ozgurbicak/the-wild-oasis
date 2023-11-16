/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpanModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpanModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpanModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpanModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
