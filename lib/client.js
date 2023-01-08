import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'nphewhe9',
    dataset: 'production',
    apiVersion: '2022-11-30',
    useCdn: true,
    token: 'skosrMEEjuaQ4wF2wOSrC5p430WcAN7bF2LR3kk4fSe4zZeY8ab6FZr4PNvKkyDg1IgUSmpu5FdSsy9VxPwTS3vPtCG1nEH5JD1fiHZUBnYdhtd0gGES7AwYdUdULweRJ8TKeIxkbAi8MFdNe1piXhVxsDA2t6MTiz3U860XZuIC1Exgw78c'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);