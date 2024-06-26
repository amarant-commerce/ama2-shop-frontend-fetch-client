export type AmarantFrameworkEntityPerson = {
    title?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    middleName?: string | null;
    email?: string | null;
    phone?: string | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};
