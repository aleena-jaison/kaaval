"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SignUpDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        onClick={() => setOpen(true)}
        className="rounded-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-medium px-6"
      >
        Sign Up <span className="text-[10px] ml-1 font-bold opacity-80">സൈൻ അപ്പ്</span>
      </Button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              Account Creation <span className="text-sm font-medium text-blue-600/70 ml-1">അക്കൗണ്ട് സൃഷ്ടിക്കൽ</span>
            </h2>
            <p className="text-slate-600 mb-4">
              Sign ups are handled by the administrator. Please request for account creation.
            </p>
            <p className="text-sm font-medium text-slate-500 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
              അക്കൗണ്ട് നിർമ്മാണം അഡ്മിനിസ്ട്രേറ്റർ വഴിയാണ് കൈകാര്യം ചെയ്യുന്നത്. അക്കൗണ്ട് സൃഷ്ടിക്കുന്നതിനായി ദയവായി അപേക്ഷിക്കുക.
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <Button 
                variant="outline" 
                onClick={() => setOpen(false)} 
                className="rounded-full text-slate-600 hover:text-slate-900"
              >
                Close
              </Button>
              <Button 
                onClick={() => setOpen(false)} 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex flex-col items-center justify-center py-6 px-6 h-auto"
              >
                <span>Request for account creation</span>
                <span className="text-[10px] opacity-80 mt-0.5">അക്കൗണ്ടിനായി അപേക്ഷിക്കുക</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
