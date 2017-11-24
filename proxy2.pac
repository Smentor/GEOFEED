function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 144.217.92.2:3128";
	}
	return "DIRECT";
}
