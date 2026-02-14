import { cn } from "@utils";

export type IArticleBlock =
    | { type: "p"; text: string }
    | { type: "section"; intro: string; list: string[] };


export type IArticle = {
    heading: React.ReactNode;
    content: IArticleBlock[];
    className?: string;
}

export const Article = ({ heading, content, className }: IArticle) => {
    const render = (block: IArticleBlock, index: number) => {
        if (block.type === "p") {
            return (
                <p key={index} className="text-foreground leading-relaxed">
                    {block.text}
                </p>
            );
        }

        return (
            <div key={index} className="space-y-2">
                <p className="text-foreground leading-relaxed">{block.intro}</p>
                {block.list.length > 0 && (
                    <ul className="list-disc pl-6 space-y-1 text-foreground leading-relaxed">
                        {block.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <article className={cn("mx-auto", className)}>
            {heading}

            <div className="space-y-6">
                {content.map(render)}
            </div>
        </article>
    );
}

export default Article;