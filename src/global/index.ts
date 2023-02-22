export function maskOnlyLetters(value: string | undefined): string {
  return value?.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "") || "";
}
export function maskPhone(value: string | undefined): string {
  return value!
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
}

export function maskEmail(value: string | undefined): string {
  return (
    value?.replace( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "") || ""
  );
}

export function maskCity(value: string | undefined): string {
  return value?.replace(/[a-zA-Z]{3}/g, "") || "";
}
