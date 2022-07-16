export function sortArrayOfObj<T>(array: T[], key: string, type: string): T[]{
	const arr: T[] = [...array];
	if (key) {
		arr.sort((a: T, b: T): number => {
			const aEl = (a[key as keyof T]);
			const bEl = (b[key as keyof T]);
			if (type === 'num')  {
				if ( +aEl < +bEl){
					return -1;
				}
				if ( +aEl > +bEl){
					return 1;
				}
			} else {
				if ( aEl < bEl){
					return -1;
				}
				if ( aEl > bEl){
					return 1;
				}
			}
			return 0;
		});
	}
	return arr;
}
