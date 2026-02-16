type TextSegment = { type: "text"; value: string };
type LinkSegment = { type: "link"; label: string; href: string };

export type InlineSegment = TextSegment | LinkSegment;

const inlineLinkRe = /\[([^\]]*)\]\(([^)]*)\)/g;

export const parseInline = (str: string): InlineSegment[] => {
    try {
        const out: InlineSegment[] = [];
        let last = 0;
        let m: RegExpExecArray | null;
        inlineLinkRe.lastIndex = 0;
        while ((m = inlineLinkRe.exec(str)) !== null) {
            if (m.index > last) {
                out.push({ type: "text", value: str.slice(last, m.index) });
            }
            out.push({ type: "link", label: m[1], href: m[2] });
            last = inlineLinkRe.lastIndex;
        }
        if (last < str.length) {
            out.push({ type: "text", value: str.slice(last) });
        }
        return out;
    }
    catch (error) {
        console.error(error);
        return [{ type: "text", value: str }];
    }

};