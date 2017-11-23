function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 5.196.75.208:3128";
	}
	return "DIRECT";
}
