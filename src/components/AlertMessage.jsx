import useAlertContext from "../context/AlertContext";

export default function AlertMessage() {
  const { alert } = useAlertContext();

  if (!alert.show) return null;

  return (
    <div
      className="alert alert-success position-fixed top-1 end-0 mt-4 me-5"
      style={{ zIndex: 1050 }}
    >
      {alert.message}
    </div>
  );
}