import rudy from './rudimental.json'

function main() {

	for (const key in rudy) {
		// @ts-ignore
		const value = rudy[key]
		console.debug({ key, value })
	}
}

main()

export namespace WpRest {
	export namespace GET {
		export namespace ViewContext {
			export interface WpPost {
				content?: {
					/** HTML-Inhalt für den Beitrag, transformiert für die Anzeige. */
					rendered: string
					/** Ob der Inhalt durch ein Passwort geschützt ist. */
					protected: boolean
				}
				author?: number
			}
		}
		export namespace EditContext {
			export interface WpPost {
				content?: {
					/** Inhalt für den Beitrag, wie er in der Datenbank vorliegt. */
					raw: string
					/** HTML-Inhalt für den Beitrag, transformiert für die Anzeige. */
					rendered: string
					/** Version des Inhalt-Block-Formates, das von dem Beitrag genutzt wird. */
					block_version: number
					/** Ob der Inhalt durch ein Passwort geschützt ist. */
					protected: boolean
				}
				author?: number
			}
		}
		export namespace EmbedContext {
			export interface WpPost {
				content?: {
					/** Ob der Inhalt durch ein Passwort geschützt ist. */
					protected: boolean
				}
				author?: number
			}
		}
	}
}