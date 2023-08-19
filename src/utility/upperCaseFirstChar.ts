export default function (buffer: string): string {
    return buffer.charAt(0).toUpperCase() + buffer.slice(1);
}