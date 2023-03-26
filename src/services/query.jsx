
export const fetchQuery = async(url, config) => {
    try {
		let result = await fetch(url, config);
		let json = await result.json();
		return json;
	} catch (error) {
		console.log(error.message);
	}
}

export const postQuery = async(url, config) => {

        try {
            let result = await fetch(url, config);
            let response = result.json();
            return response;
        } catch (error) {
            console.log(error)
        }
}





