function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 144:3128";
	}
	return "DIRECT";
}
