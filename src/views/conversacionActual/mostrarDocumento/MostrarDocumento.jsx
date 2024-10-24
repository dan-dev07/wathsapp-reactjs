import { ExcelDocument } from "./ExcelDocument";
import { PdfDocument } from "./PdfDocument";
import { PointDocument } from "./PointDocument";
import { UnknowDocument } from "./UnknowDocumet";
import { WordDocument } from "./WordDocument";

const componentes = {
  docx: ({mensaje}) => <WordDocument mensaje={mensaje} />,
  xlsx: ({mensaje}) => <ExcelDocument mensaje={mensaje} />,
  pptx: ({mensaje}) => <PointDocument mensaje={mensaje} />,
  pdf: ({mensaje}) => <PdfDocument mensaje={mensaje} />,
  doc: ({mensaje}) => <WordDocument mensaje={mensaje} />,
  xls: ({mensaje}) => <ExcelDocument mensaje={mensaje} />,
  ppt: ({mensaje}) => <PointDocument mensaje={mensaje} />,
};

export const MostrarDocumento = ({ mensaje }) => {
  const ext = mensaje.urlDocumento.split('.').reverse()[0];
  const Documento = componentes[ext] || <UnknowDocument mensaje={mensaje} />;

  return (
    <div className={`message ${mensaje.emisor}`}>
      {<Documento mensaje={mensaje} />}
    </div>
  );
};

