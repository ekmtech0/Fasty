import ChatSidebar from "@/components/client/ChatSidebar";
import ChatWindow from "@/components/client/ChatWindow";
import ContactInfo from "@/components/client/ContactInfo";

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-20px)] m-2 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
      <ChatSidebar />
      <ChatWindow />
      <ContactInfo />
    </div>
  );
}