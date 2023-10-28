export class DateFormatter {
  static getFullDate() {
    const today = new Date();

    const year = today.getFullYear().toString().padStart(4, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
  static convertDate(date: string) {
    const partes = date.split('-');
    const novaData = partes[2] + '/' + partes[1] + '/' + partes[0];
    return novaData;
  }
}
