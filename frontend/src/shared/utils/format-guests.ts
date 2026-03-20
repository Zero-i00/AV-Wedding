export function formatGuests(guests: string[]): string {
    if (guests.length === 1) return guests[0]
    if (guests.length === 2) return `${guests[0]} и ${guests[1]}`
    return `${guests[0]}, ${guests[1]} и ${guests[2]}`
}
