function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 95.161.228.186:8080";
	}
	return "DIRECT";
}
