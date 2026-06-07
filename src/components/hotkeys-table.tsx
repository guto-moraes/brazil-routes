import { Fragment } from "react";
import { Command, Plus } from "lucide-react";
import { Kbd, KbdGroup } from "./ui/kbd";
import { hotkeysList } from "@/data/hotkeys";

const TitlePage = ({ title }: { title: string }) => (
  <span className="text-bone-700 dark:text-dark-50 font-medium">{title}</span>
);

const KbdKeysGroup = ({ children }: { children: React.ReactNode }) => (
  <KbdGroup className="dark:[&_kbd]:bg-dark-900 dark:text-dark-contrast-100">{children}</KbdGroup>
);

const KbdKey = ({ text }: { text: string }) => (
  <Kbd className="rounded-xs bg-tan-200 text-tan-900 dark:bg-dark-contrast-100! dark:text-slate-950! font-semibold!">
    {text === "Mac" ? <Command className="stroke-slate-950" size={16} /> : text === "Ctrl" ? "Ctrl" : text}
  </Kbd>
);

const CommandSeparator = ({ text }: { text?: string }) => (
  <span className="text-xs text-slate-950 dark:text-white">{!text ? <Plus size={12} /> : text}</span>
);

const HotkeysTable = () => (
  <>
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="bg-bone-500 dark:bg-dark-950 text-xs text-white uppercase">
          <th className="rounded-ss py-1">Página</th>
          <th className="py-1">Linux/Windows</th>
          <th className="rounded-se py-1">Mac</th>
        </tr>
      </thead>
      <tbody className="text-sm [&_tr:last-child_td:first-child]:rounded-es [&_tr:last-child_td:last-child]:rounded-ee">
        {hotkeysList.map((item, index) => (
          <tr key={index} className="odd:bg-bone-50 even:bg-bone-200 dark:odd:bg-dark-800 dark:even:bg-dark-900">
            <td className="py-1.5 px-1 xl:px-4">
              <TitlePage title={item.page} />
            </td>
            <td className="py-1.5 px-1.5">
              <KbdKeysGroup>
                {item.commands.map((key, idx) => {
                  if (idx === 0) {
                    return (
                      <Fragment key={idx}>
                        <KbdKey text="Ctrl" />
                      </Fragment>
                    );
                  }
                  if (idx === item.commands.length) {
                    return <KbdKey text={key} key={key + idx} />;
                  }
                  return (
                    <Fragment key={idx + key}>
                      <CommandSeparator />
                      <KbdKey text={key} />
                    </Fragment>
                  );
                })}
              </KbdKeysGroup>
            </td>
            <td className="py-1.5 px-1.5">
              <KbdKeysGroup>
                {item.commands.map((key, idx) => {
                  if (idx === 0) {
                    return (
                      <Fragment key={idx}>
                        <KbdKey text="Mac" />
                      </Fragment>
                    );
                  }
                  if (idx === item.commands.length) {
                    return <KbdKey text={key} key={key + idx} />;
                  }
                  return (
                    <Fragment key={idx + key}>
                      <CommandSeparator />
                      <KbdKey text={key} />
                    </Fragment>
                  );
                })}
              </KbdKeysGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default HotkeysTable
