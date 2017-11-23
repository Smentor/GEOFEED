function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 95.181.0.66:3128";
	}
	return "DIRECT";
}
