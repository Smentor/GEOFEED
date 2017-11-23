function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 79.137.42.124:3128";
	}
	return "DIRECT";
}
