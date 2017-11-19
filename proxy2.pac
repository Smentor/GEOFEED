function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 109.195.66.153:3128";
	}
	return "DIRECT";
}
