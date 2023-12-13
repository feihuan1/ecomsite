import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import { SourceMapConsumer } from 'source-map-js';

export const client = createClient({
    projectId: "5xbhmh9m",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
})

const builder =  imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}