import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProgramModel } from "@/models/program.model";
import { Album } from "lucide-react";
import type { FC } from "react";

interface Props {
  program: ProgramModel;
  programContent: string;
}
const CardProgramView: FC<Props> = ({ program, programContent }) => {
  return (
    <>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-md">{program.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-around">
            <div className="px-2 py-2.5 bg-slate-100 rounded-md w-fit flex items-center justify-center">
              <span className="text-xs">
                <span className="font-bold mr-1">Modo:</span>
                {program.mode}
              </span>
            </div>
            <div className="px-2 py-2.5 bg-slate-100 rounded-md w-fit flex items-center justify-center">
              <span className="text-xs">
                <span className="font-bold mr-1">Duración:</span>
                {program.duration}
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full mt-2">
              <div className="px-2 py-2.5 flex flex-col items-center justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button size="xs">
                      <Album width="16" height="16" className="mr-1 " />
                      <span className="ml-2">Ver Contenido</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contenido del Programa</DialogTitle>
                      <DialogDescription className="w-screen h-11/12">
                        <iframe
                          src={programContent}
                          style={{ width: "28vw", height: "80vh" }}
                        ></iframe>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CardProgramView;
