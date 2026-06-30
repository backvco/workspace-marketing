export function GET() {
	return new Response(null, {
		status: 302,
		headers: {
			Location: 'https://raw.githubusercontent.com/backvco/workspace/master/install.sh'
		}
	});
}
