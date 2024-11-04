import {
  ArrowRightLeft,
  Languages,
  Send,
  Copy,
  Share2,
  Volume2,
  FileText,
  Check,
} from "lucide-react";

export const icons = {
  swap: <ArrowRightLeft className="h-4 w-4" />,
  language: <Languages className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
  send: <Send className="h-4 w-4 mr-2" />,
  copy: <Copy className="h-4 w-4 mr-2" />,
  copied: <Check className="h-4 w-4 mr-2" />,
  share: <Share2 className="h-4 w-4 mr-2" />,
  listen: <Volume2 className="h-4 w-4 mr-2" />,
  document: <FileText className="h-4 w-4 mr-2" />,
};
