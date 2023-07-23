import editor1 from "./editor1.json";
import editor2 from "./eidtor2.json";
import editor3 from "./editor3.json";
import editor4 from "./editor4.json";
import editor5 from "./editor5.json";
export const GenerateScript = () => {
  const Editor1 = async () => {
    return await editor1.map((item) => item.script);
  };

  const Editor2 = async () => {
    return await editor2.map((item) => item.script);
  };

  const Editor3 = async () => {
    return await editor3.map((item) => item.script);
  };

  const Editor4 = async () => {
    return await editor4.map((item) => item.script);
  };

  const Editor5 = async () => {
    return await editor5.map((item) => item.script);
  };

  return { Editor1, Editor2, Editor3, Editor4, Editor5 };
};
