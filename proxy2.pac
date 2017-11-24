function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 12:3128";
	}
	return "DIRECT";
}
