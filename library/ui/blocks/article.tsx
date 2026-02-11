import { cn } from "@utils";

export type IElement =
    | { type: "h2"; text: string }
    | { type: "p"; text: string }
    | { type: "list"; items: string[] };

export type IArticle = {
    id?: string;
    heading: React.ReactNode; // h1
    sections?: IElement[][];
    className?: string;
}

export const Article = ({ id, heading, sections, className }: IArticle) => {
    const renderElement = (element: IElement, index: number) => {
        if (element.type === "h2") {
            return (
                <h2 key={index} className="text-lg">
                    {element.text}
                </h2>
            );
        }

        if (element.type === "p") {
            return (
                <p key={index}>
                    {element.text}
                </p>
            );
        }

        if (element.type === "list") {
            return (
                <ul key={index} className="list-disc pl-6 space-y-1">
                    {element.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )
        }

        return null;
    };

    return (
        <article id={id} className={cn("mx-auto space-y-4", className)}>
            <h1>
                {heading}
            </h1>

            {sections?.map((section, index) => (
                <section key={index} className="space-y-4">
                    {section.map(renderElement)}
                </section>
            ))}
        </article>
    );
}

export default Article;