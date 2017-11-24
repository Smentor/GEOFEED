function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 14:3128";
	}
	return "DIRECT";
}
