function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 15:3128";
	}
	return "DIRECT";
}
