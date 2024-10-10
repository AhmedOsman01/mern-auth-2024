import { MailtrapClient } from "mailtrap";

const TOKEN = "0c4c7b4b2c3c76c38ae609381adc2fc8";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
