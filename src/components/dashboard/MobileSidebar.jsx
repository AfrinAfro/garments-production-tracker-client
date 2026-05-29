import { Drawer } from "antd";
import Sidebar from "./Sidebar";

const MobileSidebar = ({
  open,
  setOpen,
}) => {
  return (
    <Drawer
      placement="left"
      closable={true}
      onClose={() => setOpen(false)}
      open={open}
      width={280}
      bodyStyle={{
        padding: 0,
        background: "#071028",
      }}
    >
      <Sidebar />
    </Drawer>
  );
};

export default MobileSidebar;